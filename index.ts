class Conta{
    constructor(
       public numero:number,
       public saldo:number,
       public nome:string
    ){}
    getSaldo():number{
        return this.saldo
    }
}

class Corrente extends Conta {
    constructor(
        numero:number,
        saldo:number,
        nome:string,
        protected limiteCredito:number,
    ){super(numero,saldo,nome)}

    depositar(valor:number){
        if(valor<=0){
            console.log("impossivel depositar um valor negativo")
            return
        }
        this.saldo +=valor;
    }

    sacar(valor:number){
        if(this.saldo >=valor){
            this.saldo -=valor
            return valor
        }
        return 0;
    }
}
const conta = new Corrente(37151,1000,"Artur",2000);



conta.depositar(50)
console.log(conta.getSaldo())

conta.sacar(1000)
console.log(conta.getSaldo())

