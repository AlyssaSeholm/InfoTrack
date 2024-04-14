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
        public string? Title { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Language { get; set; }
        public string? Timezone { get; set; }
        public string? About { get; set; }

        public UserDto() { }
        public UserDto(
            string id, 
            string email, 
            string firstName, 
            string lastName, 
            string? selectedTheme = null, 
            DateTime? createdOn = null, 
            DateTime? lastModifiedOn = null, 
            string? msg = "",
            string? title = "",
            string? city = "",
            string? state = "",
            string? about = "",
            string? language = "English",
            string? timezone = "EST")
        {
            Id = id;
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            CreatedOn = createdOn ?? DateTime.UtcNow;
            LastModifiedOn = lastModifiedOn ?? DateTime.UtcNow;
            SelectedTheme = selectedTheme;
            Msg = msg ?? "";
            Title = title;
            City = city;
            State = state;
            About = about;
            Language = language;
            Timezone = timezone;
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
                Msg = ResponseMessages.GetMessage(msgType),
                Title = "",
                City = "",
                State = "",
                About = "",
                Language = "English",
                Timezone = "EST"
            };

            return obj;
        }
    }
}
