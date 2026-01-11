/* eslint-disable import/no-extraneous-dependencies */
import { createUmi as basecreateUmi } from '@trezoaplex-foundation/umi-bundle-tests';
import { tplTrifle } from '../src';

export const createUmi = async () => (await basecreateUmi()).use(tplTrifle());
