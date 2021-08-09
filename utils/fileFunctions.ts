import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';

type Shortcut = {
  URL: string;
  IconFile: string;
};

export const getProcessByFileExtension = (_extension: string) => '';

export const getShortCut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve) => {
    fs.readFile(path, (_error, contents = Buffer.from('')) =>
      resolve(ini.parse(contents.toString()) as Shortcut)
    );
  });
