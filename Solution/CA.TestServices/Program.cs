namespace CA.TestAPI
{
    #region Using

    using System;
    using System.Threading.Tasks;

    #endregion

    internal class Program
    {
        static void Main()
        {
            Console.Title = "Test API";
            MenuStart().GetAwaiter().GetResult();
        }

        private static async Task MenuStart()
        {
            Console.Clear();
            Console.WriteLine("*********************************");
            Console.WriteLine("*         Menú Test API         *");
            Console.WriteLine("*********************************");
            Console.WriteLine("");
            Console.WriteLine("");
            Console.WriteLine("1 - GetToken");
            Console.WriteLine("2 - GetUsers");
            Console.WriteLine("0 - Salir");
            Console.WriteLine("");
            Console.WriteLine("Elige una opción ...");

            var option = Console.ReadKey();
            switch (option.KeyChar)
            {
                case '0':
                    Environment.Exit(0);
                    break;

                case '1':
                    await UsersController.GetToken();

                    Console.WriteLine("");
                    Console.WriteLine("Pulsa una tecla para continuar ...");
                    Console.ReadKey();

                    await MenuStart();
                    break;

                case '2':
                    await UsersController.GetUsers();

                    Console.WriteLine("");
                    Console.WriteLine("Pulsa una tecla para continuar ...");
                    Console.ReadKey();

                    await MenuStart();
                    break;

                default:
                    await MenuStart();                    
                    break;
            }
        }
    }
}
