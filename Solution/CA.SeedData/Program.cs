﻿// ReSharper disable InconsistentNaming
namespace CA.SeedData
{
    #region Using

    using System;
    using System.IO;
    using Microsoft.Extensions.Configuration;
    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;
    using System.Diagnostics;
    using System.Linq;
    using DataEFCoreSQL;

    #endregion

    internal static class Program
    {
        static void Main()
        {
            Console.Clear();
            Console.WriteLine("*****************************");
            Console.WriteLine("*         Seed Data         *");
            Console.WriteLine("*****************************");
            Console.WriteLine("");
            Console.WriteLine("");
            Console.WriteLine("Choose Provider ...");
            Console.WriteLine("");
            Console.WriteLine("1 - SQL");
            Console.WriteLine("2 - Oracle");
            Console.WriteLine("");

            try
            {
                var builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

                var configuration = builder.Build();

                var typeSeed = Console.ReadKey();
                Console.WriteLine("");
                Console.WriteLine("wait ...");
                switch (typeSeed.KeyChar)
                {
                    case '1':
                        SeedFromSQL(configuration.GetSection("ConnectionStrings")["SQL"]);
                        break;

                    case '2':
                        Console.WriteLine("Error: Seed no implemented");
                        break;

                    default:
                        Console.WriteLine("Error: Seed no contemplated!!!");
                        break;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            finally
            {
                Console.WriteLine("Press any key to exit ...");
                Console.ReadKey();
            }
        }

        private static void SeedFromSQL(string options)
        {
            var stopWatch = new Stopwatch();
            stopWatch.Start();           

            var optionsBuilder = new DbContextOptionsBuilder<EFContext>();
            optionsBuilder.UseSqlServer(options);

            using (var context = new EFContext(optionsBuilder.Options))
            using (var dbContextTransaction = context.Database.BeginTransaction())
            {
                var profession = new Profession
                {
                    AddedDate = DateTime.Now,
                    Name = "Progammer",
                    Description = "Computer Programmer"
                };

                if (!context.Profession.Any())
                {
                    context.Profession.Add(profession);

                    profession = new Profession
                    {
                        AddedDate = DateTime.Now,
                        Name = "Analyst",
                        Description = "Computer Analyst"
                    };
                    context.Profession.Add(profession);

                    profession = new Profession
                    {
                        AddedDate = DateTime.Now,
                        Name = "Project Manager",
                        Description = "Project Manager"
                    };
                    context.Profession.Add(profession);
                }

                context.SaveChanges();

                var user = new User
                {
                    Name = "Jesús",
                    Surname = "Sánchez Corzo",
                    Username = "jsanchco",
                    AddedDate = DateTime.Now,
                    Age = 46,
                    BirthDate = new DateTime(1972, 8, 1),
                    Email = "jsanchco@gmail.com",
                    Password = "123456",
                    ProfessionId = 1
                };

                if (!context.User.Any())
                {
                    context.User.Add(user);
                }

                context.SaveChanges();

                if (!context.Address.Any())
                {
                    context.Address.Add(new Address
                    {
                        AddedDate = DateTime.Now,
                        UserId = user.Id,
                        Street = "Avda. de las Suertes",
                        Number = 55
                    });
                    context.Address.Add(new Address
                    {
                        AddedDate = DateTime.Now,
                        UserId = user.Id,
                        Street = "C/ Dehesa de Vicálvaro",
                        Number = 33
                    });
                }

                context.SaveChanges();

                if (!context.DocumentType.Any())
                {
                    context.DocumentType.Add(new DocumentType
                    {
                        AddedDate = DateTime.Now,
                        Name = "pdf",
                        Extension = ".pdf"
                    });
                    context.DocumentType.Add(new DocumentType
                    {
                        AddedDate = DateTime.Now,
                        Name = "word",
                        Extension = ".doc"
                    });
                    context.DocumentType.Add(new DocumentType
                    {
                        AddedDate = DateTime.Now,
                        Name = "excel",
                        Extension = ".xls"
                    });
                    context.DocumentType.Add(new DocumentType
                    {
                        AddedDate = DateTime.Now,
                        Name = "PhotoProfile",
                        Extension = ".jpg"
                    });
                }

                context.SaveChanges();

                if (!context.Document.Any())
                {
                    context.Document.Add(new Document
                    {
                        AddedDate = DateTime.Now,
                        Name = "MyDocumentPdf",
                        Data = @"c:\Log\MyDocumentPdf.pdf",
                        DocumentTypeId = 1
                    });
                    context.Document.Add(new Document
                    {
                        AddedDate = DateTime.Now,
                        Name = "MyDocumentWord",
                        Data = @"c:\Log\MyDocumentWord.doc",
                        DocumentTypeId = 2
                    });
                    context.Document.Add(new Document
                    {
                        AddedDate = DateTime.Now,
                        Name = "MyDocumentExcel",
                        Data = @"c:\Log\MyDocumentExcel.xls",
                        DocumentTypeId = 3
                    });
                }

                context.SaveChanges();

                dbContextTransaction.Commit();

                stopWatch.Stop();
                var ts = stopWatch.Elapsed;                

                Console.WriteLine("");

                Console.WriteLine($"Table User -> {context.User.Count()} rows");
                Console.WriteLine($"Table Address -> {context.Address.Count()} rows");
                Console.WriteLine($"Table Profession -> {context.Profession.Count()} rows");
                Console.WriteLine($"Table DocumentType -> {context.DocumentType.Count()} rows");
                Console.WriteLine($"Table Document -> {context.Document.Count()} rows");
                Console.WriteLine($"\t{ts.Seconds}.{ts.Milliseconds} sg.ms");

                Console.WriteLine("");
            }
        }
    }
}
