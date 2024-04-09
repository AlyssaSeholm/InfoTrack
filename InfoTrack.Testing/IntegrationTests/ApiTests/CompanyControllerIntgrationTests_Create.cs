
using InfoTrack.Application;
using InfoTrack.Application.Mediatr.Commands;
using InfoTrack.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace InfoTrack.Testing.IntegrationTests.ApiTests
{
    public class CompanyControllerIntgrationTests_Create
    {
        private readonly WebApplicationFactory<Startup> _factory;

        public CompanyControllerIntgrationTests_Create(WebApplicationFactory<Startup> factory)
        {
            _factory = factory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureServices(services =>
                {
                    // Find the descriptor of the database context to replace
                    var dbContextDescriptor = services.SingleOrDefault(d => d.ServiceType == typeof(DbContextOptions<InfoTrackDbContext>));

                    if (dbContextDescriptor != null)
                    {
                        services.Remove(dbContextDescriptor);
                    }

                    // Add the in-memory database for testing
                    services.AddDbContext<InfoTrackDbContext>(options =>
                    {
                        //options.UseInMemoryDatabase("InMemoryDbForTesting");
                    });
                });
            });
        }

        //TODO: Integration tests - need to figure out dbContext options above

        //[Fact]
        //public async Task Post_CreateCompany_ReturnsSuccessStatusCode()
        //{
        //    // Arrange
        //    var client = _factory.CreateClient();
        //    var request = new CreateCompanyRequest(1, "Integration Test Company", [], "https://www.integrationtest.com", DateTime.UtcNow);

        //    var content = new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json");

        //    // Act
        //    var response = await client.PostAsync("/api/Company", content);

        //    // Assert
        //    response.EnsureSuccessStatusCode(); // Status Code 200-299
        //    Assert.Equal(HttpStatusCode.Created, response.StatusCode);

        //    // Additional step to verify the entity is created in the database
        //    using (var scope = _factory.Services.CreateScope())
        //    {
        //        var scopedServices = scope.ServiceProvider;
        //        var dbContext = scopedServices.GetRequiredService<InfoTrackDbContext>();

        //        var company = await dbContext.Companies.FirstOrDefaultAsync(c => c.Name == "Integration Test Company");
        //        Assert.NotNull(company);
        //        Assert.Equal("https://www.integrationtest.com", company.BaseUrl);
        //    }
        //}
    }
}
