﻿
namespace InfoTrack.Domain.Entities
{
    public class UserCompanyRelationship
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
    }
}