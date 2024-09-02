import { Test, TestingModule } from '@nestjs/testing';
import { BcryptService } from './bcrypt.service';

describe('BcryptService', () => {
  let provider: BcryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptService],
    }).compile();

    provider = module.get<BcryptService>(BcryptService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
