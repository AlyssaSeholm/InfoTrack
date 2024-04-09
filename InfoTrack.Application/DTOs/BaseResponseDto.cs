namespace InfoTrack.Application.DTOs
{
    public class BaseResponseDto
    {
        public BaseResponseDto() {  }
        public BaseResponseDto(string msg)
        {
            Msg = msg;
        }

        public required string Msg { get; set; }
    }
}
