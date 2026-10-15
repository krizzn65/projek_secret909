export interface CourseModule {
  id: string; code: string; name: string; credits: number; semester: number;
}
export interface StudyProgram {
  id: string; facultyId: string; name: string; curriculum: CourseModule[];
}
export interface Faculty { id: string; name: string; slug: string; programs: StudyProgram[]; }
