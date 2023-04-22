
let nota;
nota=parseInt(prompt("Ingrese su nota"));

        if (nota >= 90)
        {document.write('Excelente');} 
        else { if (nota >= 75)
            {document.write('Muy bien');}
            else { if (nota >= 65)
                { document.write('Bien');} 
                else { if (nota <= 65)
                {document.write('Reprobado');}
            }
        }
    }
