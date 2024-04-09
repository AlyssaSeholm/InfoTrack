using InfoTrack.API.Controllers;
using InfoTrack.Application.Mediatr.Commands;
using InfoTrack.Application.DTOs;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;

namespace InfoTrack.Testing.UnitTests.ApiTests
{
    public class CompanyControllerUnitTests_Create
    {
        private readonly Mock<IMediator> _mockMediator;
        private readonly Mock<ILogger<CompanyController>> _mockLogger;
        private readonly CompanyController _controller;

        public CompanyControllerUnitTests_Create()
        {
            _mockMediator = new Mock<IMediator>();
            _mockLogger = new Mock<ILogger<CompanyController>>();
            _controller = new CompanyController(_mockMediator.Object, _mockLogger.Object);
        }

        [Theory]
        [InlineData(1, "Test Company A", "http://www.testcompanya.com", "Primary", null)]
        [InlineData(0, "Test Company B", "http://www.testcompanyb.com", "Competitor", 1)]
        [InlineData(1, "", "http://www.emptyname.com", "Sister", 1)] // Assuming your validation allows empty names, adjust as needed
        [InlineData(2, "Test Company C", ", \"\", 1", "Primary", null)] // Assuming your validation allows empty URLs, adjust as needed
        public async Task CreateCompany_VariousInputs(int userId, string companyName, string websiteUrl, string relationshipType, int? primaryCompId)
        {
            // Arrange
            var request = new CreateCompanyRequest(userId, companyName, websiteUrl, relationshipType, primaryCompId, ["test1", "test2"]);

            var companyDto = new CompanyDto { Id = "1", Name = companyName, BaseUrl = websiteUrl, IncludeTerms = [], Msg = "test msg" };
            var response = new CreateCompanyResponse(companyDto);

            _mockMediator
                .Setup(m => m.Send(It.IsAny<CreateCompanyRequest>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(response);

            // Act
            var result = await _controller.Create(request);

            // Assert
            var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(result.Result);
            var returnValue = Assert.IsType<CreateCompanyResponse>(createdAtActionResult.Value);
            Assert.NotNull(returnValue.Company);
            Assert.Equal(companyName, returnValue.Company.Name);
            Assert.Equal(websiteUrl, returnValue.Company.BaseUrl);
        }

        //[Fact]
        //public async Task CreateCompany_Successful()
        //{
        //    // Arrange
        //    var request = new CreateCompanyRequest(1, "Test Company", ["test1", "test2"], "http://www.testcompany.com", DateTime.UtcNow);

        //    var companyDto = new CompanyDto { Id = "1", Name = "Test Company", BaseUrl = "http://www.testcompany.com", IncludeTerms = [], Msg = "test msg" };
        //    var response = new CreateCompanyResponse(companyDto);

        //    _mockMediator
        //        .Setup(m => m.Send(It.IsAny<CreateCompanyRequest>(), It.IsAny<CancellationToken>()))
        //        .ReturnsAsync(response);


        //    // Act
        //    var result = await _controller.Create(request);


        //    // Assert
        //    var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(result.Result);
        //    var returnValue = Assert.IsType<CreateCompanyResponse>(createdAtActionResult.Value);
        //    Assert.NotNull(returnValue.Company);
        //    Assert.Equal("Test Company", returnValue.Company.Name);
        //    Assert.Equal("http://www.testcompany.com", returnValue.Company.BaseUrl);
        //}
    }
}
