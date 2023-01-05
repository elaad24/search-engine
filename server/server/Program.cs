using Elasticsearch.Net;
using Nest;
using server.Config;

var builder = WebApplication.CreateBuilder(args);

// elasticsearch configuration 
var config = new Configuration();
builder.Services.AddSingleton(config.BuildElasticSeachClient());

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(option => { option.
    AddDefaultPolicy(builder => builder
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyHeader());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
