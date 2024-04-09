using InfoTrack.API.Controllers;
using InfoTrack.Application.Mediatr.Commands;
using InfoTrack.Application.DTOs;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit;
using NUnit.Framework;
using Assert = NUnit.Framework.Assert;

namespace InfoTrack.API.Controllers.Tests
{
    [TestFixture]
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

        [TestMethod]
        [TestCase(1, "Test Company A", "http://www.testcompanya.com", "Primary", null)]
        [TestCase(0, "Test Company B", "http://www.testcompanyb.com", "Competitor", 1)]
        [TestCase(1, "", "http://www.emptyname.com", "Sister", 1)] // Assuming your validation allows empty names, adjust as needed
        [TestCase(2, "Test Company C", ", \"\", 1", "Primary", null)] // Assuming your validation allows empty URLs, adjust as needed
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
            Assert.That(result.Result, Is.TypeOf(typeof(CreatedAtActionResult)));
            Assert.That(result.Value, Is.TypeOf(typeof(CreateCompanyResponse)));
            Assert.That(result.Value?.Company, Is.Not.Null);

            Assert.That(result.Value?.Company?.Name, Is.Not.Null);
            Assert.That(result.Value?.Company?.Name, Is.EqualTo(companyName));

            Assert.That(result.Value?.Company?.BaseUrl, Is.Not.Null);
            Assert.That(result.Value?.Company?.BaseUrl, Is.EqualTo(websiteUrl));
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