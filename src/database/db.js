const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/* db.serialize(() => {
    db.run(` 
        CREATE TABLE IF NOT EXISTS places (
           id  INTEGER PRIMARY KEY AUTOINCREMENT,
           image TEXT,
           name TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           items TEXT
        );
    `)

    const query = `
    insert into PLACES (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES ( ?, ?, ?, ?, ?, ?, ? );`


    const values = [
        "https://images.unsplash.com/photo-1587797283885-9a123e3e88a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Paperside",
        "Guilherme Gemballa, Jardim America",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, Lãmpadas"
    ]


    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrador com Sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)  


/*     db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
        if(err) {
            console.log(err)    
        }

        console.log("Registro deletado com sucesso!")
    } ) */

/*     
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seu registros: ")
        console.log(rows)

    }) 

}) */