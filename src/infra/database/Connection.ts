export default interface Connection {
  query(statement: string, params: any,callback?: any): Promise<any>;  
  close?(): void;
  initialize(): void;
}