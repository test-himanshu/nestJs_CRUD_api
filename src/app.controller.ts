import { Controller, Get, Post, Delete, Put, Param } from "@nestjs/common";


@Controller('book')
export class BookController {

    //add book
    @Post("/add")
    addBook() : string{
        return "This will add book";
    }

    
    //delete book
    @Delete("/delete")
    deleteBook() : string{
        return "This will delete book";
    }


    //update book
    @Put("/update")
    updateBook() : string{
        return "It will update the book";
    }


    //find all books
    @Get("/findAll")
    findBook() : string{
        return "It will find the book";
    }

    //find a book
    @Get('/findBookById/:bookId')
    findBookById(@Param() params): string {
        console.log(params.id);
        return `This will find a book of id #${params.bookId}`;
    }
}