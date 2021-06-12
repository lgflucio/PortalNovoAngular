export class PortalNfse {
    public id: number;
    public cnpjFornecedor: string;
    public razaoSocial: string;
    public pedido: string;
    public linha: string;
    public idAnexo: number;
    public protocolo: bigint;
    public numeroNota: number;
    public serie: string;
    public arquivo: string;
    public statusProtocolo: number;
    public dataUpload: Date;
    public dataEmissao: Date;
    public dataPreenchimento: Date;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}