using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.WebRequestMethods;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System;
using System.Threading.Tasks;
using Xunit;
using Moq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using InfoTrack.API.Controllers;
using InfoTrack.Application.MediatR.Commands;


namespace InfoTrack.Tests.UnitTests.API_Tests
{
    public class CompanyControllerTests
    {
        //        Test Case: CreateCompany_Successful
        //        Description: Tests successful creation of a company via the API.
        //Steps: Mock IMediator.Send() to return a valid CreateCompanyResponse.Call Create() method with valid CreateCompanyRequest.
        //Assert: Response status is CreatedAtActionResult with HTTP 201 status code.

        private readonly Mock<IMediator> _mockMediator;
        private readonly Mock<ILogger<CompanyController>> _mockLogger;
        private readonly CompanyController _controller;

        public CompanyControllerTests()
        {
            _mockMediator = new Mock<IMediator>();
            _mockLogger = new Mock<ILogger<CompanyController>>();
            _controller = new CompanyController(_mockMediator.Object, _mockLogger.Object);
        }

        [Fact]
        public async Task CreateCompany_Successful()
        {
            // Arrange
            var request = new CreateCompanyRequest
            {
                UserId = 1,
                CompanyName = "Test Company",
                WebsiteUrl = "http://www.testcompany.com",
                CreatedOn = DateTime.UtcNow
            };

            var response = new CreateCompanyResponse
            {
                Company = new CompanyDto
                {
                    Id = "1",
                    Name = "Test Company",
                    BaseUrl = "http://www.testcompany.com",
                    IncludeTerms = new string[] { }
                    // Other necessary properties here
                }
            };

            _mockMediator
                .Setup(m => m.Send(It.IsAny<CreateCompanyRequest>(), It.IsAny<CancellationToken>()))
                .ReturnsAsync(response);

            // Act
            var result = await _controller.Create(request);

            // Assert
            var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(result.Result);
            var returnValue = Assert.IsType<CreateCompanyResponse>(createdAtActionResult.Value);
            Assert.NotNull(returnValue.Company);
            Assert.Equal("Test Company", returnValue.Company.Name);
            Assert.Equal("http://www.testcompany.com", returnValue.Company.BaseUrl);
            // Additional assertions as necessary
        }
    }
}
