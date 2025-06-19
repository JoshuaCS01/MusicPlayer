// types/MusicFiles.d.ts (or at the top of your .tsx file)
export interface MusicFile {
  title: string;
  artist: string;
  duration: number;
  path: string;
  // Add more fields as needed
}

export interface MusicFilesModule {
  getMusicFiles(): Promise<MusicFile[]>;
}
