import '@testing-library/jest-dom'
import * as jestExtendedMatchers from 'jest-extended';
import '@testing-library/jest-dom/vitest'
import {expect} from 'vitest';

expect.extend(jestExtendedMatchers);