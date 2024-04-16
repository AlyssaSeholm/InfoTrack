namespace InfoTrack.Domain.Entities.Services.Interfaces
{
    public interface IEncryptionService
    {
        string Encrypt(string input);
        string Decrypt(string cipherText);
    }
}
