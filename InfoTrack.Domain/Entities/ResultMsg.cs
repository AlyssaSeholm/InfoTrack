
namespace InfoTrack.Domain.Entities
{
    public class ResultMsg<T>
    {
        public bool Success { get; set; }
        public required string ErrorMessage { get; set; }
        public T? Data { get; set; }

        public ResultMsg()
        {
            Success = false;
            ErrorMessage = string.Empty;
            Data = default;
        }
    }
}
