import { SamplemoduleoneModule } from './samplemoduleone.module';

describe('SamplemoduleoneModule', () => {
  let samplemoduleoneModule: SamplemoduleoneModule;

  beforeEach(() => {
    samplemoduleoneModule = new SamplemoduleoneModule();
  });

  it('should create an instance', () => {
    expect(samplemoduleoneModule).toBeTruthy();
  });
});
