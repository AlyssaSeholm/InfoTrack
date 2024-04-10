using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities;

namespace InfoTrack.Application.Common.Mappings
{
    public sealed class MappingProfile : Profile
    {
        public MappingProfile()//IEncryptionService encryptionService)
        {
            CreateMap<Company, CompanyDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id.ToString()));

            CreateMap<User, UserDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id.ToString()));

            CreateMap<Query, QueryDto>();

            CreateMap<SearchResults, SearchResultsDto>();

            CreateMap<SearchResultItem, SearchResultsItemDto>();

            //.ForMember(dest => dest.Id, opt => opt.MapFrom(src => encryptionService.Encrypt(src.Id.ToString())))
            //.ReverseMap();
            //.ForMember(dest => dest.Id, opt => opt.MapFrom(src => int.Parse(encryptionService.Decrypt(src.Id))));

            //CreateMap<UserCompany, UserCompanyDto>()
            //    .ForMember(dest => dest.CompanyName, opt => opt.MapFrom(src => (src.Company != null) ? src.Company.Name : ""))
            //    .ForMember(dest => dest.BaseUrl, opt => opt.MapFrom(src => (src.Company != null) ? src.Company.BaseUrl : ""));
        }
    }
}
