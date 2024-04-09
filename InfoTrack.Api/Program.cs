using InfoTrack.API;
using InfoTrack.Infrastructure.Data;
using InfoTrack.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApiServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    app.UseSwagger();

    //app.UseSwaggerUI();
    app.UseSwaggerUI(options => 
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "CAT-A-LOG SEO Solutions V1")
    );
    //app.UseSwaggerUI(options =>
    //{
    //    options.SwaggerEndpoint("/swagger/v1/swagger.json", nameof(InfoTrack));
    //    options.RoutePrefix = string.Empty;
    //    options.DisplayOperationId();
    //});
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


//var services = (IServiceScopeFactory)app.Services.GetRequiredService(typeof(IServiceScopeFactory));
//using (var scope = services.CreateScope())
//{
//    var context = scope.ServiceProvider.GetRequiredService<MediatRAndRecordTypesDbContext>();
//    if (args.Contains("ci"))
//        args = new string[] { "dropdb", "migratedb", "stop" };
//    if (args.Contains("dropdb"))
//    {
//        context.Database.ExecuteSql($"DROP TABLE Consults");
//        context.Database.ExecuteSql($"DROP SCHEMA MediatRAndRecordTypes");
//        context.Database.ExecuteSql($"DELETE from __EFMigrationsHistory where MigrationId like '%_MediatRAndRecordTypes_%';");
//    }
//    if (args.Contains("migratedb"))
//    {
//        context.Database.Migrate();
//    }
//    if (args.Contains("stop"))
//        Environment.Exit(0);
//}

app.Run();

public partial class Program { }