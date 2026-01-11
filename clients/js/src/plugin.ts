import { tplTokenMetadata } from '@trezoaplex-foundation/tpl-token-metadata';
import { UmiPlugin } from '@trezoaplex-foundation/umi';
import { createMplTrifleProgram } from './generated';

export const tplTrifle = (): UmiPlugin => ({
  install(umi) {
    umi.use(tplTokenMetadata());
    umi.programs.add(createMplTrifleProgram(), false);
  },
});
