export default interface UserCase {
  execute: (params: any) => Promise<any>
}
