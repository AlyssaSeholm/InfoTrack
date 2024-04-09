using InfoTrack.Application.DTOs;
using Microsoft.AspNetCore.Mvc;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.API.Helpers
{
    public static class ResponseMsgHelper
    {
        public static OkObjectResult Ok<T>(StatusType status, string message, T response)
        {
            return new OkObjectResult(new ResponseMsgDto<T>(status, message, response));
        }

        public static CreatedAtActionResult CreatedAtAction<T>(string actionName, string controllerName, object routeValues, StatusType status, string message, T response)
        {
            return new CreatedAtActionResult(actionName, controllerName, routeValues, new ResponseMsgDto<T>(status, message, response));
        }

        public static NotFoundObjectResult NotFound<T>(StatusType status, string message, T response)
        {
            return new NotFoundObjectResult(new ResponseMsgDto<T>(status, message, response));
        }

        public static BadRequestObjectResult BadRequest<T>(StatusType status, string message, T response)
        {
            return new BadRequestObjectResult(new ResponseMsgDto<T>(status, message, response));
        }
    }
}
