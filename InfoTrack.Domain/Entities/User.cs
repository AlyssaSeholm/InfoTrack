
namespace InfoTrack.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
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

        public User() { }

        public User( 
            int id, 
            string email, 
            string firstName, 
            string lastName, 
            string? selectedTheme = null, 
            DateTime? createdOn = null, 
            DateTime? lastModifiedOn = null,
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
            Title = title;
            City = city;
            State = state;
            About = about;
            Language = language;
            Timezone = timezone;
        }
    }
}
