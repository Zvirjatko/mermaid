import plugin from './detector.js';
import { describe, it } from 'vitest';

const { detector } = plugin;

describe('swimlane detector', () => {
  it('should fail for dagre-d3', () => {
    expect(
      detector('swimlane', {
        flowchart: {
          defaultRenderer: 'dagre-d3',
        },
      })
    ).toBe(false);
  });
  it('should fail for dagre-wrapper', () => {
    expect(
      detector('flowchart', {
        flowchart: {
          defaultRenderer: 'dagre-wrapper',
        },
      })
    ).toBe(false);
  });
  it('should succeed for elk', () => {
    expect(
      detector('flowchart', {
        flowchart: {
          defaultRenderer: 'elk',
        },
      })
    ).toBe(true);
    expect(
      detector('graph', {
        flowchart: {
          defaultRenderer: 'elk',
        },
      })
    ).toBe(true);
  });

  it('should detect swimlane', () => {
    expect(detector('swimlane')).toBe(true);
  });

  it('should not detect class with defaultRenderer set to elk', () => {
    expect(
      detector('class', {
        flowchart: {
          defaultRenderer: 'elk',
        },
      })
    ).toBe(false);
  });
});
