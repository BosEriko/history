Vim�UnDo� C���D�!��`]3�G��� �Xk�y�   !   Jexport const setStateBreakoutGroupFromParams = (ctxParamName: string) => (          ?   Z          Z   Z    _:�   % _�       @           ?          ����                                                                                                                                                                                                                                                                                                                                         %       v   %    _9��    �               Dexport const setBreakoutRoomFromParams = (ctxParamName: string) => {�             5�_�   ?   B           @          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    _9��    �               Iexport const setStateBreakoutRoomFromParams = (ctxParamName: string) => {�             5�_�   @   C   A       B          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    _9�     �                 };5�_�   B   D           C      I    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    _9�     �               Iexport const setStateBreakoutRoomFromParams = (ctxParamName: string) => {5�_�   C   E           D      J    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    _9�      �               Jexport const setStateBreakoutRoomFromParams = (ctxParamName: string) => ()5�_�   D   F           E           ����                                                                                                                                                                                                                                                                                                                                                  V        _9��     �               5�_�   E   G           F           ����                                                                                                                                                                                                                                                                                                                                                  V        _9��     �               �               5�_�   F   H           G          ����                                                                                                                                                                                                                                                                                                                                                 v        _9��   ! �               Iexport const setStateBreakoutRoomFromParams = (ctxParamName: string) => (5�_�   G   I           H      +    ����                                                                                                                                                                                                                                                                                                                               +          .       v   .    _9��     �               J    const breakoutRoom = await readBreakoutRoomController(breakoutRoomId);5�_�   H   K           I          ����                                                                                                                                                                                                                                                                                                                                                v       _9��     �               F  async function setBreakoutRoom(ctx: any, next: () => Promise<any>) {5�_�   I   L   J       K          ����                                                                                                                                                                                                                                                                                                                                                v       _9�     �               4    const breakoutRoomId = ctx.params[ctxParamName];5�_�   K   M           L      ;    ����                                                                                                                                                                                                                                                                                                                               ;          H       v   H    _9�     �               K    const breakoutRoom = await readBreakoutGroupController(breakoutRoomId);�             5�_�   L   N           M          ����                                                                                                                                                                                                                                                                                                                                                v       _9�	   " �               L    const breakoutRoom = await readBreakoutGroupController(breakoutGroupId);5�_�   M   O           N      #    ����                                                                                                                                                                                                                                                                                                                                                v       _9�     �               Himport { readBreakoutRoomController } from '../../controllers/breakout';5�_�   N   P           O           ����                                                                                                                                                                                                                                                                                                                                                v       _9�     �               $} from '../../controllers/breakout';�             5�_�   O   Q           P           ����                                                                                                                                                                                                                                                                                                                                                v       _9�     �               @readBreakoutGroupController,} from '../../controllers/breakout';5�_�   P   R           Q      	    ����                                                                                                                                                                                                                                                                                                                                                v       _9�     �               $import { readBreakoutRoomController,5�_�   Q   S           R          ����                                                                                                                                                                                                                                                                                                                                                v       _9�     �                B  readBreakoutGroupController,} from '../../controllers/breakout';5�_�   R   T           S      	    ����                                                                                                                                                                                                                                                                                                                               	                 v       _9�     �         !          if (!breakoutRoom) {�         !    5�_�   S   U           T      (    ����                                                                                                                                                                                                                                                                                                                               	                 v       _9�      �         !      \      throw new NotFoundError(`Breakout Room with ID ${breakoutRoomId} could not be found`);5�_�   T   V           U      (    ����                                                                                                                                                                                                                                                                                                                               	                 v       _9�!     �         !      X      throw new NotFoundError(`Breakout  with ID ${breakoutRoomId} could not be found`);5�_�   U   W           V      8    ����                                                                                                                                                                                                                                                                                                                               	                 v       _9�$     �         !      ]      throw new NotFoundError(`Breakout Group with ID ${breakoutRoomId} could not be found`);5�_�   V   X           W      8    ����                                                                                                                                                                                                                                                                                                                               	                 v       _9�%     �         !      O      throw new NotFoundError(`Breakout Group with ID ${} could not be found`);5�_�   W   Z           X      %    ����                                                                                                                                                                                                                                                                                                                               (          %       v   %    _9�)     �         !      *    ctx.state.breakoutRoom = breakoutRoom;5�_�   X       Y       Z           ����                                                                                                                                                                                                                                                                                                                                                v       _:�   % �         !      Jexport const setStateBreakoutGroupFromParams = (ctxParamName: string) => (5�_�   X           Z   Y          ����                                                                                                                                                                                                                                                                                                                                                v       _9�.   $ �         !      ,    ctx.state.breakoutGroup = breakoutGroup;5�_�   I           K   J      
    ����                                                                                                                                                                                                                                                                                                                               
                 v       _9��     �             �               6    const setBreakoutGroup = ctx.params[ctxParamName];5�_�   @           B   A          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    _9�     �               M  return async function setBreakoutRoom(ctx: any, next: () => Promise<any>) {5��