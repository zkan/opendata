/*
var ds = new Miso.Dataset({
  data : [
    { one : 12,  two : 40,  three : 40 },
    { one : 1,   two : 40,  three : 40 },
    { one : 102, two : 430, three : 20 }
  ]
});
ds.fetch({ 
  success : function() {
    console.log("Columns: ", this.columnNames());
    console.log("Row Count ", this.length);
  }
});
*/

var ds = new Miso.Dataset({
    importer: Miso.Dataset.Importers.GoogleSpreadsheet,
    parser: Miso.Dataset.Parsers.GoogleSpreadsheet,
    key: "0AnmcK3ynYLPQdHg3YmdXUFVoRjJlb3kyajZuVF9ORkE",
    worksheet: "1"
});
ds.fetch({
    success : function() {
        // Data successfully loaded
        //console.log(ds.columnNames());
        this.each(function(row) {
            console.log(JSON.stringify(row));
        });
    },
    error : function() {
        // Data loading failed
        console.log("Are you sure you are connected to the Internet?");
    }
});
