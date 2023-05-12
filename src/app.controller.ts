import { Controller, Get, Post, Delete, Put, Param } from "@nestjs/common";
import { BookService } from "./book.service";


@Controller('book')
export class BookController {


    //nestjs has provided with the object
    constructor(private bookService : BookService){}

    //add book
    @Post("/add")
    addBook() : string{
        return this.bookService.addBook();
    }

    
    //delete book
    @Delete("/delete")
    deleteBook() : string{
        return this.bookService.deleteBook();
    }


    //update book
    @Put("/update")
    updateBook() : string{
        return this.bookService.updateBook();
    }


    //find all books
    @Get("/findAll")
    findBook() : string{
        return this.bookService.getBook();
    }

    //find a book
    // @Get('/findBookById/:bookId')
    // findBookById(@Param() params): string {

    // }
}