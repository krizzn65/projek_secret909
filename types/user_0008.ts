export interface UserProfile {
  id: string; username: string; displayName: string; avatarUrl?: string; bio?: string;
}
export type UserRole = 'admin' | 'member' | 'guest';
