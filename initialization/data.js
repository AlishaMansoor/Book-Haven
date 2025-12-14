// const sampleBooks = [
//     { title: "The Silent Patient", author: "Alex Michaelides", price: 799, genre: "Thriller", chapters: 30, part: 1 },
//     { title: "Where the Crawdads Sing", author: "Delia Owens", price: 899, genre: "Fiction", chapters: 42, part: 1 },
//     { title: "Atomic Habits", author: "James Clear", price: 999, genre: "Self-help", chapters: 20, part: 1 },
//     { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: 650, genre: "Self-help", chapters: 18, part:1 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", price: 699, genre: "Classic", chapters: 31, part: 1 },
//     { title: "1984", author: "George Orwell", price: 750, genre: "Dystopian", chapters: 24, part: 1 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 720, genre: "Classic", chapters: 9, part: 1 },
//     { title: "Becoming", author: "Michelle Obama", price: 1299, genre: "Biography", chapters: 25, part: 1 },
//     { title: "The Alchemist", author: "Paulo Coelho", price: 600, genre: "Fiction", chapters: 15, part: 1 },
//     { title: "Dune", author: "Frank Herbert", price: 1100, genre: "Science Fiction", chapters: 50, part: 1 },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 699, genre: "Fiction", chapters: 26, part: 1 },
//     { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 799, genre: "Finance", chapters: 10, part: 1 },
//     { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: 1250, genre: "History", chapters: 21, part: 1 },
//     { title: "The Book Thief", author: "Markus Zusak", price: 880, genre: "Historical Fiction", chapters: 50, part: 1 },
//     { title: "The Road", author: "Cormac McCarthy", price: 670, genre: "Post-apocalyptic", chapters: 35, part: 1 },
//     { title: "Meditations", author: "Marcus Aurelius", price: 550, genre: "Philosophy", chapters: 12, part: 1 },
//     { title: "The Hobbit", author: "J.R.R. Tolkien", price: 900, genre: "Fantasy", chapters: 19, part: 1 },
//     { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 850, genre: "Fantasy", chapters: 17, part: 1 },
//     { title: "The Name of the Wind", author: "Patrick Rothfuss", price: 1150, genre: "Fantasy", chapters: 92, part: 1 },
//     { title: "A Game of Thrones", author: "George R.R. Martin", price: 1300, genre: "Fantasy", chapters: 72, part: 1 },
//     { title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 980, genre: "Classic", chapters: 45, part: 1 },
//     { title: "Pride and Prejudice", author: "Jane Austen", price: 750, genre: "Romance", chapters: 61, part: 1 },
//     { title: "Shōgun", author: "James Clavell", price: 1350, genre: "Historical Fiction", chapters: 112, part: 1 }
// ];




const sampleBooks = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 995,
        image: {
            url: "https://m.media-amazon.com/images/I/71F4+7rk2eL._SL1500_.jpg",
            filename: "BookImages/atomic_habits"
        },
        genre: "Self-help",
        chapters: 20,
        part: 1,
        description: "A guide to breaking bad habits and building good ones through small, consistent changes. Based on scientific research and real-life examples."
    },
    {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        price: 1145,
        image: {
            url: "https://m.media-amazon.com/images/I/81dQF4DSUoL._SL1500_.jpg",
            filename: "BookImages/the_7_habits"
        },
        genre: "Self-help",
        chapters: 24,
        part: 1,
        description: "A self-improvement classic that teaches principles of personal and professional effectiveness, focusing on habits that lead to long-term success."
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 829,
        image: {
            url: "https://m.media-amazon.com/images/I/91Ccq18dSuL._SX342_.jpg",
            filename: "BookImages/the_alchemist"
        },
        genre: "Fiction",
        chapters: 15,
        part: 1,
        description: "A mystical story about Santiago, a shepherd boy who embarks on a journey to discover his personal legend and fulfill his dreams."
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 597,
        image: {
            url: "https://m.media-amazon.com/images/I/81tp41zDnBL._SX342_.jpg",
            filename: "BookImages/to_kill_a_mockingbird"
        },
        genre: "Classic",
        chapters: 31,
        part: 1,
        description: "A Pulitzer Prize-winning novel about racial injustice and moral growth, seen through the eyes of a young girl in the American South."
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 580,
        image: {
            url: "https://m.media-amazon.com/images/I/71XCGVETRZL._SX342_.jpg",
            filename: "BookImages/1984"
        },
        genre: "Dystopian",
        chapters: 24,
        part: 1,
        description: "A dystopian novel that explores the dangers of totalitarianism, government surveillance, and the manipulation of truth."
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        price: 745,
        image: {
            url: "https://m.media-amazon.com/images/I/51xJbFMRsxL._SY445_SX342_QL70_FMwebp_.jpg",
            filename: "BookImages/harry_potter_1"
        },
        genre: "Fantasy",
        chapters: 17,
        part: 1,
        description: "The first book in the beloved Harry Potter series, where a young boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 497,
        image: {
            url: "https://m.media-amazon.com/images/I/51FLS+wpLGL._SY300_SX300_.jpg",
            filename: "BookImages/pride_and_prejudice"
        },
        genre: "Romance",
        chapters: 61,
        part: 1,
        description: "A classic romantic novel that explores themes of love, social class, and personal growth through the story of Elizabeth Bennet and Mr. Darcy."
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        price: 771,
        image: {
            url: "https://m.media-amazon.com/images/I/51Rs-tsiwBL._SY445_SX342_QL70_FMwebp_.jpg",
            filename: "BookImages/the_book_thief"
        },
        genre: "Historical Fiction",
        chapters: 50,
        part: 1,
        description: "A moving novel set in Nazi Germany, narrated by Death, following a young girl who finds solace in stealing books and sharing them."
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 870,
        image: {
            url: "https://m.media-amazon.com/images/I/51NuMV9SJ8L._SY445_SX342_QL70_FMwebp_.jpg",
            filename: "BookImages/rich_dad_poor_dad"
        },
        genre: "Finance",
        chapters: 10,
        part: 1,
        description: "A personal finance book that contrasts the financial philosophies of the author's two 'dads' and provides lessons on wealth-building."
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 1245,
        image: {
            url: "https://m.media-amazon.com/images/I/81tPEe0egBL._SX342_.jpg",
            filename: "BookImages/sapiens"
        },
        genre: "History",
        chapters: 21,
        part: 1,
        description: "An exploration of human history from the Stone Age to the present, examining how biology and history have shaped societies."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 880,
        image: {
            url: "https://m.media-amazon.com/images/I/51yjW++Ko+L._SY300_SX300_.jpg",
            filename: "BookImages/the_hobbit"
        },
        genre: "Fantasy",
        chapters: 19,
        part: 1,
        description: "A fantasy adventure following Bilbo Baggins as he embarks on a quest with dwarves to reclaim a stolen treasure from the dragon Smaug."
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        price: 1080,
        image: {
            url: "https://m.media-amazon.com/images/I/71-1WBgjGoL._SX342_.jpg",
            filename: "BookImages/dune"
        },
        genre: "Science Fiction",
        chapters: 50,
        part: 1,
        description: "A science fiction epic set in a desert world filled with political intrigue, prophecy, and a struggle for control of a valuable resource."
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 575,
        image: {
            url: "https://m.media-amazon.com/images/I/51HrCuHBn+L._SY300_SX300_.jpg",
            filename: "BookImages/the_catcher_in_the_rye"
        },
        genre: "Fiction",
        chapters: 26,
        part: 1,
        description: "A novel about teenage alienation and angst, following the experiences of Holden Caulfield in New York City."
    },
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        price: 665,
        image: {
            url: "https://m.media-amazon.com/images/I/31XDWM65guL._SY445_SX342_.jpg",
            filename: "BookImages/meditations"
        },
        genre: "Philosophy",
        chapters: 12,
        part: 1,
        description: "A collection of personal reflections by the Roman Emperor Marcus Aurelius on self-discipline, stoicism, and wisdom."
    },
    {
        title: "Becoming",
        author: "Michelle Obama",
        price: 935,
        image: {
            url: "https://m.media-amazon.com/images/I/71rm0H5uOaL._SX342_.jpg",
            filename: "BookImages/becoming"
        },
        genre: "Biography",
        chapters: 25,
        part: 1,
        description: "The memoir of former First Lady Michelle Obama, detailing her journey from childhood to her role in the White House."
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        price: 705,
        image: {
            url: "https://m.media-amazon.com/images/I/41HwV9XuYxL._SY445_SX342_QL70_FMwebp_.jpg",
            filename: "BookImages/the_road"
        },
        genre: "Post-apocalyptic",
        chapters: 35,
        part: 1,
        description: "A haunting tale of survival and father-son love in a post-apocalyptic world."
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        price: 771,
        image: {
            url: "https://m.media-amazon.com/images/I/71RpNi5ilxL._AC_UY327_FMwebp_QL65_.jpg",
            filename: "BookImages/crime_and_punishment"
        },
        genre: "Classic",
        chapters: 45,
        part: 1,
        description: "A psychological novel exploring guilt, redemption, and morality through the story of a young man's crime and its consequences."
    },
    {
        title: "Shōgun",
        author: "James Clavell",
        price: 1080,
        image: {
            url: "https://m.media-amazon.com/images/I/518a-NeuGEL._SY445_SX342_.jpg",
            filename: "BookImages/shogun"
        },
        genre: "Historical Fiction",
        chapters: 112,
        part: 1,
        description: "A historical novel set in feudal Japan, following an Englishman who becomes involved in samurai culture and political intrigue."
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        price: 995,
        image: {
            url: "https://m.media-amazon.com/images/I/91OqU1cAmrL._AC_UY327_FMwebp_QL65_.jpg",
            filename: "BookImages/the_name_of_the_wind"
        },
        genre: "Fantasy",
        chapters: 92,
        part: 1,
        description: "A fantasy novel about a gifted young man named Kvothe who seeks to uncover the truth behind a mysterious legend."
    },
    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        price: 1060,
        image: {
            url: "https://m.media-amazon.com/images/I/41IorHy8VYL._SX300_SY300_QL70_FMwebp_.jpg",
            filename: "BookImages/where_the_crawdads_sing"
        },
        genre: "Fiction",
        chapters: 42,
        part: 1,
        description: "A mystery novel about a young girl who grows up alone in the marshlands and becomes a murder suspect."
    }
];

module.exports = { sampleBooks };
