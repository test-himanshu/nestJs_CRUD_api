import { Injectable } from "@nestjs/common/decorators";


@Injectable()
export class BookService{

     addBook() : string {
        return "This will add book";
    }

    updateBook() : string{
        return "This will update book";
    }

    deleteBook() : string{
        return "This will delete the book";
    }

    getBook() : string{
        return "This will give booklist";
    }
}

