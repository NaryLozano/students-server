export interface StudentsStructure extends StudentStructure {
  id: number;
  name: string;
  weekOfDeath: number;
}

export interface StudentStructure {
  name: string;
  weekOfDeath: number;
}
