


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApiServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    app.UseSwagger();

    app.UseSwaggerUI(options => 
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "CAT-A-LOG SEO Solutions V1")
    );
}


app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
//app.UseEndpoints(endpoints =>
//    {
//        endpoints.MapControllers();
//    });


app.Run();

public partial class Program { }