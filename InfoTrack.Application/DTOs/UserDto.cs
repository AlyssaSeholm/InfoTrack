using InfoTrack.Application.Common;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.Application.DTOs
{
    public class UserDto : BaseResponseDto
    {
        public required string Id { get; set; }
        public required string Email { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
        public string? SelectedTheme { get; set; }

        public UserDto() { }
        public UserDto(string id, string email, string firstName, string lastName, string? selectedTheme = null, DateTime? createdOn = null, DateTime? lastModifiedOn = null, string? msg = "")
        {
            Id = id;
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            CreatedOn = createdOn ?? DateTime.UtcNow;
            LastModifiedOn = lastModifiedOn ?? DateTime.UtcNow;
            SelectedTheme = selectedTheme;
            Msg = msg ?? "";
        }

        public static UserDto CreateEmptyWithMessage(StatusType msgType, string id = "0", string email = "", string firstName = "", string lastName = "", string? selectedTheme = null, DateTime? createdOn = null, DateTime? lastModifiedOn = null)
        {
            var obj = new UserDto()
            {
                Id = id,
                Email = email,
                FirstName = firstName,
                LastName = lastName,
                CreatedOn = createdOn ?? DateTime.UtcNow,
                LastModifiedOn = lastModifiedOn ?? DateTime.UtcNow,
                SelectedTheme = selectedTheme,
                Msg = ResponseMessages.GetMessage(msgType)
            };

            return obj;
        }
    }
}
