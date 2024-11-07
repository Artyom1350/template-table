export interface IUser {
  mainInfo: IMainInfo,
  date: Date,
  location: string
}

export interface IMainInfo {
  fio: string,
  phoneNumber: string,
  birthDate: Date | null
}
