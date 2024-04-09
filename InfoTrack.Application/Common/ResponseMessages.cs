
namespace InfoTrack.Application.Common
{
    public static class ResponseMessages
    {
        public enum StatusType
        {
            Success,
            NotFound,
            BadRequest,
            Unauthorized,
            Forbidden,
            InternalServerError,
            Conflict,
            Created,
            NoContent,
            Conversion_To_Int,
            CustomError // Use for any custom messages
        }

        private static readonly Dictionary<StatusType, string> Messages = new()
        {
            { StatusType.Success, "Request processed successfully." },
            { StatusType.NotFound, "The requested resource was not found." },
            { StatusType.BadRequest, "The request was invalid or cannot be processed." },
            { StatusType.Unauthorized, "Authentication is required or has failed." },
            { StatusType.Forbidden, "Access to the requested resource is forbidden." },
            { StatusType.InternalServerError, "An unexpected error occurred processing the request." },
            { StatusType.Conflict, "The request could not be completed due to a conflict with the current state of the resource." },
            { StatusType.Created, "The resource was created successfully." },
            { StatusType.NoContent, "The request was successful but returns no content." },
            { StatusType.Conversion_To_Int, "Unable to parse numerical to string to int32." },
            { StatusType.CustomError, "A custom error occurred." } // Placeholder for any specific messages you might want to add dynamically
        };

        public static string GetMessage(StatusType code) => Messages.TryGetValue(code, out var message) ? message : "Unknown msg.";
    }
}

