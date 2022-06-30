using AutoMapper;
using Acme.BookStore.Books;
using Acme.BookStore.Authors;

namespace Acme.BookStore;

//AutoMapper es una herramienta que nos permite no escribir codigo, codigo que se necesita para Mapear un Objeto a Otro
//En este caso usa AutoMapper, que crea una conexion "CreateMap" entre el enviador (Primer paramentro) hasta el destino(Segundo parametro)

public class BookStoreApplicationAutoMapperProfile : Profile
{
    
        public BookStoreApplicationAutoMapperProfile()
        {
            CreateMap<Book, BookDto>();
            CreateMap<CreateUpdateBookDto, Book>();
            CreateMap<Author, AuthorDto>();

    }

}
