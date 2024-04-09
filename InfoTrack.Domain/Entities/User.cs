
namespace InfoTrack.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
        public string? SelectedTheme { get; set; }

        public User() { }

        public User(int id, string email, string firstName, string lastName, string? selectedTheme = null, DateTime? createdOn = null, DateTime? lastModifiedOn = null)
        {
            Id = id;
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            CreatedOn = createdOn ?? DateTime.UtcNow;
            LastModifiedOn = lastModifiedOn ?? DateTime.UtcNow;
            SelectedTheme = selectedTheme;
        }
    }
}
