namespace CA.TestAPI
{
    #region Using

    using System.Net.Http;
    using System;
    using System.Net.Http.Headers;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    using Models;
    using Helpers;
    using System.IO;
    using Microsoft.Extensions.Configuration;
    using System.Collections.Generic;
    using Domain.ViewModels;

    #endregion

    public static class UsersController
    {
        static HttpClient _client = new HttpClient();
        static string _route = string.Empty;
        static string _token = string.Empty;

        public static async Task<bool> GetToken()
        {
            try
            {
                Console.WriteLine("");
                Console.WriteLine("");
                if (string.IsNullOrEmpty(_token))
                {
                    var builder = new ConfigurationBuilder()
                        .SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

                    var configuration = builder.Build();
                    _route = configuration["ROUTE_SERVICE"];

                    Console.WriteLine(_route);

                    var authenticate = await _client.PostAsJsonAsync($"{_route}Users/authenticate", new Login { username = "jsanchco", password = "123456" });
                    if (authenticate.IsSuccessStatusCode)
                    {
                        var stringResult = await authenticate.Content.ReadAsStringAsync();
                        var session = JsonConvert.DeserializeObject<Session>(stringResult);

                        _token = session.token;

                        _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _token);

                        Console.WriteLine("authenticate -> true");
                        return true;
                    }

                    Console.WriteLine($"Error authenticate -> {authenticate.StatusCode}");

                    return false;
                }

                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }   
        }

        public static async Task<List<UserViewModel>> GetUsers()
        {
            try
            {
                if (await GetToken())
                {
                    Console.WriteLine("");
                    _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _token);
                    var response = await _client.GetAsync($"{_route}users");
                    if (response.IsSuccessStatusCode)
                    {
                        var stringResult = await response.Content.ReadAsStringAsync();
                        var users = JsonConvert.DeserializeObject<List<UserViewModel>>(stringResult);
                        Console.WriteLine(JsonConvert.SerializeObject(users));
                       
                        return users;
                    }

                    Console.WriteLine($"Error GetUsers -> {response}");
                    return null;
                }

                Console.WriteLine("Error GetUsers -> GetToken = false");
                return null;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}
