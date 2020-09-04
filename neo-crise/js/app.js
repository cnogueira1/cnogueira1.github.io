new Vue({
  el:"#app",
  data:{
    crise: {
      name: '',
      matricula: '',
      operacao: '',
      site: '',
      andar: '',
      email: '',
      maquinas: '',
      horario: '',
      contato:'',
      contatoDois: '',
      ferramenta: '',
      descricao: '',
      ipOne: '',
      ipTwo: ''
    },
    normal: {
      name: '',
      matricula: '',
      contato: '',
      operacao: '',
      site: '',
      andar:'',
      ip:'',
      ferramenta: '',
      descricao: '',
      horario: ''
    },
    sdk: {
      name: '',
      matricula: '',
      contato: '',
      operacao: '',
      email: '',
      cargo: '',
      descricao: '',
      ip: ''
    },
    marsh: {
      name: '',
      neo: '',
      contato: '',
      marsh: '',
      email: '',
      cargo: '',
      descricao: ''
    },
    ramal: {
      name: '',
      matricula: '',
      contato: '',
      operacao: '',
      ramal: '',
      id: '',
      idEs: '',
      ramalEs: '',
      ip: '',
      descricao: ''
    },
    wittel: {
      name: '',
      matricula: '',
      contato: '',
      operacao: '',
      maquinas: '',
      horario: '',
      ip: '',
      ipTwo: '',
      email: '',
      Ferramenta: '',
      descricao: '',
      andar: '',
      site: ''
    }
  },
  methods: {
    mostraWittel() {      
      const formNormal = document.querySelector('#containerNormal')
      const formCrise = document.querySelector('#containerCRISE')
      const formSDK = document.querySelector('#containerSDK')
      const formRAMAL = document.querySelector('#containerRAMAL')
      const formWittel = document.querySelector('#containerWittel')
      const formMarsh = document.querySelector('#containerMARSH')
      formMarsh.style.display = 'none'
      formNormal.style.display = 'none'
      formWittel.style.display = 'flex'
      formCrise.style.display = 'none'
      formSDK.style.display = 'none'   
      formRAMAL.style.display = 'none'   
    },
    mostraRamal() {      
      const formNormal = document.querySelector('#containerNormal')
      const formCrise = document.querySelector('#containerCRISE')
      const formSDK = document.querySelector('#containerSDK')
      const formRAMAL = document.querySelector('#containerRAMAL')
      const formWittel = document.querySelector('#containerWittel')
      const formMarsh = document.querySelector('#containerMARSH')
      formMarsh.style.display = 'none'
      formWittel.style.display = 'none'
      formNormal.style.display = 'none'
      formCrise.style.display = 'none'
      formSDK.style.display = 'none'   
      formRAMAL.style.display = 'flex'   
    },
    mostraCrise() {      
      const formNormal = document.querySelector('#containerNormal')
      const formCrise = document.querySelector('#containerCRISE')
      const formSDK = document.querySelector('#containerSDK')
      const formRAMAL = document.querySelector('#containerRAMAL')
      const formWittel = document.querySelector('#containerWittel')
      const formMarsh = document.querySelector('#containerMARSH')
      formMarsh.style.display = 'none'
      formWittel.style.display = 'none'
      formNormal.style.display = 'none'
      formCrise.style.display = 'flex'
      formSDK.style.display = 'none'   
      formRAMAL.style.display = 'none'   
    },
    mostraSDK(){
      const formNormal = document.querySelector('#containerNormal')
      const formCrise = document.querySelector('#containerCRISE')
      const formSDK = document.querySelector('#containerSDK')
      const formRAMAL = document.querySelector('#containerRAMAL')
      const formWittel = document.querySelector('#containerWittel')
      const formMarsh = document.querySelector('#containerMARSH')
      formMarsh.style.display = 'none'
      formWittel.style.display = 'none'
      formRAMAL.style.display = 'none'   
      formNormal.style.display ='none'
      formCrise.style.display = 'none'
      formSDK.style.display = 'flex' 
    },
    mostraMarsh(){
      const formNormal = document.querySelector('#containerNormal')
      const formCrise = document.querySelector('#containerCRISE')
      const formSDK = document.querySelector('#containerSDK')
      const formRAMAL = document.querySelector('#containerRAMAL')
      const formWittel = document.querySelector('#containerWittel')
      const formMarsh = document.querySelector('#containerMARSH')
      formMarsh.style.display = 'flex'
      formWittel.style.display = 'none'
      formRAMAL.style.display = 'none'   
      formNormal.style.display ='none'
      formCrise.style.display = 'none'
      formSDK.style.display = 'none' 
    },
    mostraNormal(){
      const formNormal = document.querySelector('#containerNormal')
      const formCrise = document.querySelector('#containerCRISE')
      const formSDK = document.querySelector('#containerSDK')
      const formRAMAL = document.querySelector('#containerRAMAL')
      const formWittel = document.querySelector('#containerWittel')
      const formMarsh = document.querySelector('#containerMARSH')
      formMarsh.style.display = 'none'
      formWittel.style.display = 'none'
      formRAMAL.style.display = 'none'   
      formNormal.style.display ='flex'
      formCrise.style.display = 'none'
      formSDK.style.display = 'none'       
    },
    clearWittel(){
      this.wittel.name= ''
      this.wittel.matricula= ''
      this.wittel.contato= ''
      this.wittel.maquinas= ''
      this.wittel.horario= ''
      this.wittel.operacao= ''
      this.wittel.ip= ''
      this.wittel.ipTwo= ''
      this.wittel.email= ''
      this.wittel.ferramenta= ''
      this.wittel.descricao= ''
      this.wittel.andar= ''
      this.wittel.site= ''
    },
    clearRamal(){
      this.ramal.name= ''
      this.ramal.matricula= ''
      this.ramal.contato= ''
      this.ramal.operacao= ''
      this.ramal.ramal= ''
      this.ramal.id= ''
      this.ramal.ramalEs= '',
      this.ramal.idEs = '',
      this.ramal.descricao = ''
    },
    clearSDK(){
      this.sdk.name= ''
      this.sdk.matricula= ''
      this.sdk.contato= ''
      this.sdk.operacao= ''
      this.sdk.email= ''
      this.sdk.cargo= ''
      this.sdk.descricao= ''
    },
    clearCrise(){
      this.crise.name = ''
      this.crise.matricula= ''
      this.crise.operacao= ''
      this.crise.site= ''
      this.crise.andar= ''
      this.crise.email= ''
      this.crise.maquinas= ''
      this.crise.horario= ''
      this.crise.contato=''
      this.crise.contatoDois= ''
      this.crise.ferramenta= ''
      this.crise.descricao= ''
      this.crise.ipOne= ''
      this.crise.ipTwo= ''     
  
    },
    clearNormal(){
      this.normal.name= ''
      this.normal.matricula= ''
      this.normal.contato= ''
      this.normal.operacao= ''
      this.normal.site= ''
      this.normal.andar=''
      this.normal.ip=''
      this.normal.ferramenta= ''
      this.normal.descricao= ''
      this.normal.horario= ''  
    },
    clearMarsh(){
      this.marsh.name = ''
      this.marsh.neo = ''
      this.marsh.marsh = ''
      this.marsh.cargo = ''
      this.marsh.contato = ''
      this.marsh.email = ''
      this.marsh.descricao = ''
    }
  }
})