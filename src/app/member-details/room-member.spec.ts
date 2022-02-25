import { RoomMember } from './room-member';

describe('RoomMember', () => {
  it('should create an instance', () => {
    expect(new RoomMember("ABC",123,"XYZ@GMAIL.COM")).toBeTruthy();
  });
});
