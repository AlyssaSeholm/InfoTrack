//using FluentValidation;

//TODO
//public class AddItemValidator : AbstractValidator<AddItemDto>
//{
//    public AddItemValidator()
//    {
//        this.RuleFor(m => m.Name).NotEmpty().WithMessage("Item should have a name").WithErrorCode("2001");
//        this.RuleFor(m => m.Quantity).GreaterThan(0).WithMessage("Quantity must be greater than zero").WithErrorCode("2002");
//    }
//}
//public class UpdateQuantityValidator : AbstractValidator<UpdateQuantityDto>
//{
//    public UpdateQuantityValidator()
//    {
//        this.RuleFor(m => m.Quantity).GreaterThan(0).WithMessage("Quantity must be greater than zero").WithErrorCode("2002");
//    }
//}
namespace InfoTrack.API.Validators
{
    public class CompanyValidator_Add
    {
    }
}
