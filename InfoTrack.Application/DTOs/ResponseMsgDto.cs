
using InfoTrack.Application.Helpers;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.Application.DTOs
{
    public class ResponseMsgDto<T>
    {
        //public ResponseMsgDto(string status, T response, string message = "") 
        //    : this(EnumHelper.ConvertToEnum(status), response, message) { } //this(EnumHelper.ConvertToEnum<T>(status), response, message) { }

        //public ResponseMsgDto(int status, string message, T response) : this((StatusType)status, message, response) { }

        public ResponseMsgDto(StatusType code, string message, T response)
        {
            Code = EnumHelper.GetEnumValue(code);
            Message = message;
            Response = response;
        }

        public ResponseMsgDto() { }

        public int Code { get; }

        public string? Message { get; }

        public T? Response { get; }
    }
}
