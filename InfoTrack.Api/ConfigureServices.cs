using InfoTrack.Application;
using InfoTrack.Application.Common.Mappings;
using InfoTrack.Application.Mediatr.Queries;
using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Domain.Services;
using InfoTrack.Domain.Services.Interfaces;
using InfoTrack.Infrastructure.Data;
using InfoTrack.Infrastructure.Repositories;
using InfoTrack.Infrastructure.Services;
using InfoTrack.Infrastructure.Services.Parse;
using InfoTrack.Infrastructure.Services.Search;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using System.Reflection;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ConfigureServices
    {
        public static void AddApiServices(this IServiceCollection services, IConfiguration configuration)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "CAT-A-LOG SEO Solutions",
                    Description = "CAT-A-LOG: Providing meow-velous SEO data to help cat-apult your business to the top! --[InfoTrack SEO Interview Project]--",
                    TermsOfService = new Uri("https://example.com/terms"),
                    Contact = new OpenApiContact
                    {
                        Name = "Alyssa Seholm",
                        Email = "Lys.Seholm@gmail.com",
                        Url = new Uri("https://www.linkedin.com/in/alyssaseholm/"),
                    },
                    //License = new OpenApiLicense
                    //{
                    //    Name = "Use under MIT",
                    //    Url = new Uri("https://opensource.org/licenses/MIT"),
                    //}
                });

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                options.IncludeXmlComments(xmlPath);
            });

            services.AddCors(options => options.AddPolicy("CorsPolicy",
                builder => builder
                    .WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(isOriginAllowed: _ => true)
                    .AllowCredentials()
                )
            );

            services.AddHttpContextAccessor();

            services.AddHttpClient();

            // Application Layer DI
            services.AddAutoMapper(cfg => cfg.AddProfile(typeof(MappingProfile)));

            services.AddSingleton<IEncryptionService>(new EncryptionService("YourEncryptionKeyHere1234", "YourIVHere12345678")); //TODO: Generate key and iv

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining(typeof(GetCompanyByIdHandler))); //
            // Domain and Application Interfaces DI
               

            //services.AddTransient<ISearchService, GoogleSearchService>(); //TODO: What's the difference between addtransient and addscoped
            //services.AddTransient<ISearchService, BingSearchService>(); //TODO: What's the difference between addtransient and addscoped
            //services.AddTransient<ISearchService, YahooSearchService>(); //TODO: What's the difference between addtransient and addscoped

            services.AddTransient<IResultParserService, DefaultResultParserService>();
            services.AddTransient<IResultParserService, GoogleResultParserService>();

            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient<ICompanyRepository, CompanyRepository>();
            services.AddTransient<ICompanyService, CompanyService>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IQueryRepository, QueryRepository>();
            services.AddTransient<IQueryService, QueryService>();
            services.AddTransient<ISearchRepository, SearchRepository>();
            services.AddTransient<ISearchService, SearchService>();


            // EF Core DI
            services.AddScoped<IInfoTrackDbContext, InfoTrackDbContext>();
            services.AddDbContext<InfoTrackDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
                //    ,builder => builder.MigrationsAssembly("InfoTrack_SEO")
                //        .EnableRetryOnFailure())
                //.EnableThreadSafetyChecks(false)
                //.EnableSensitiveDataLogging();
            }, ServiceLifetime.Scoped); //TODO: is this necessary as I 'AddScoped' above?


            services.AddControllers();
        }
    }
}
