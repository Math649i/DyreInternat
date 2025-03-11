Dette er en fullstack webapplikation for et dyreinternat, hvor brugere kan oprette, læse, opdatere og
slette dyreposter via et REST API. Applikationen bruger Node.js og Express til at oprette en server og
håndtere API-ruter, og MongoDB til at gemme dyrenes data i en database. Derudover håndteres
billedupload via Multer, og applikationen har et simpelt frontend bygges med HTML, CSS og JavaScript.

Alle CRUD operationer virkede fint uden frontend. Efter jeg valgte at bruge billeder også fik det lidt problemer, men hvis man udkommentere billede delen og bruger POST-man virker det fint

Følgende Middleware mangler - mere logning og fejlhåndtering
