Vim�UnDo� 7�2�$�%�n>qSmT�@\�1XX���`ށ�>�      R    <Text style={styles.certificateNumber}>{`Certificate Number: ${value}`}</Text>      ,      	       	   	   	    ^�q�    _�                        -    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�n�    �               R    <Text style={styles.certificateNumber}>{`Certificate Number: ${value}`}</Text>5�_�                            ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�pM     �                  // ANCHOR React   import * as React from 'react';       // ANCHOR react-pdf   +import { Text } from '@react-pdf/renderer';       // ANCHOR styles   "import { styles } from './styles';       interface IProps {     value: string;   }       @export const LyonBordeauxTemplateCertificateNumber = React.memo(     ({ value }: IProps) => (   >    <Text style={styles.certificateNumber}>{`${value}`}</Text>     ),   );5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�p�    �               R    <Text style={styles.certificateNumber}>{`Certificate Number: ${value}`}</Text>5�_�                       3    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�p�     �             5�_�                       R    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�p�    �               Z    <Text style={styles.certificateNumber}>{value ? `Certificate Number: ${value}`}</Text>5�_�                       Y    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�p�     �             5�_�                       Z    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�p�    �               b    <Text style={styles.certificateNumber}>{value ? `Certificate Number: ${value}` : null }</Text>5�_�      	                 X    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�p�    �             5�_�                  	      0    ����                                                                                                                                                                                                                                                                                                                               -          @       v   @    ^�q�    �               a    <Text style={styles.certificateNumber}>{value ? `Certificate Number: ${value}` : null}</Text>�             5��