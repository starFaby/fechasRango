class FechaFiltro {
      fechaFil() {
        const accounts =[
            {"id": "1", "name": "item 1", "amount": "150", "date":"10-18-2018"},
            {"id": "2", "name": "item 2", "amount": "200", "date":"11-18-2018"},
            {"id": "3", "name": "item 3", "amount": "600", "date":"11-18-2018"},
            {"id": "4", "name": "item 4", "amount": "700", "date":"12-18-2018"},
            {"id": "5", "name": "item 5", "amount": "800", "date":"13-18-2018"}
           ];
          
        const busca = accounts.filter(n => n.date > "10-18-2018" && n.date < "12-18-2018");
          
          console.log(busca);
    };
}